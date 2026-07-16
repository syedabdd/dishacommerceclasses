'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

// Ensure Prisma enum is used
export async function getQuizzes(page: number = 1, limit: number = 20) {
  const skip = (page - 1) * limit;
  const [quizzes, total] = await Promise.all([
    prisma.quiz.findMany({
      skip,
      take: limit,
      orderBy: { createdAt: 'desc' },
      include: {
        _count: {
          select: { questions: true }
        }
      }
    }),
    prisma.quiz.count()
  ]);
  const totalPages = Math.ceil(total / limit);
  return { success: true, data: quizzes, totalPages };
}

export async function getQuizById(id: number) {
  return await prisma.quiz.findUnique({
    where: { id },
    include: {
      questions: true
    }
  });
}

export async function createQuiz(data: {
  title: string;
  className: string;
  subject: "ACCOUNTANCY" | "BUSINESS_STUDIES" | "ECONOMICS" | "MATHEMATICS" | "ENTREPRENEURSHIP";
  topicName: string;
  description: string;
  difficulty: string;
  estimatedTime: number;
  isPublished: boolean;
}) {
  const quiz = await prisma.quiz.create({
    data: {
      ...data,
      estimatedTime: Number(data.estimatedTime)
    }
  });
  
  revalidatePath('/admindp/quiz');
  return quiz;
}

export async function updateQuiz(id: number, data: any) {
  const quiz = await prisma.quiz.update({
    where: { id },
    data: {
      ...data,
      estimatedTime: data.estimatedTime ? Number(data.estimatedTime) : undefined
    }
  });
  
  revalidatePath('/admindp/quiz');
  revalidatePath(`/admindp/quiz/${id}/edit`);
  return quiz;
}

export async function deleteQuiz(id: number) {
  await prisma.quiz.delete({
    where: { id }
  });
  revalidatePath('/admindp/quiz');
}

export async function addQuestion(quizId: number, data: {
  question: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  correctAnswer: string;
  explanation: string;
}) {
  const question = await prisma.quizQuestion.create({
    data: {
      quizId,
      ...data
    }
  });
  
  revalidatePath(`/admindp/quiz/${quizId}/edit`);
  return question;
}

export async function deleteQuestion(id: number, quizId: number) {
  await prisma.quizQuestion.delete({
    where: { id }
  });
  revalidatePath(`/admindp/quiz/${quizId}/edit`);
}
