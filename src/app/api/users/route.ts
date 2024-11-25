import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import prisma from 'src/libs/prisma';

import type { UserListResponse } from '@/types/user';

export async function GET(req: NextRequest) {
  try {
    const page = Number(req.nextUrl.searchParams.get('page'));
    const search = req.nextUrl.searchParams.get('s') || '';
    const currentPage = page;
    const perPage = 50;
    const skip = (currentPage - 1) * perPage;
    const user = await prisma.users.findMany({
      skip,
      take: perPage,
      where: {
        name: {
          contains: search,
        },
      },
    });
    return NextResponse.json<UserListResponse>(
      {
        items: user,
        page: currentPage,
        pageSize: perPage,
        hasNextPage: true,
      },
      {
        status: 200,
      },
    );
  } catch (e) {
    return NextResponse.json(
      {
        message: e,
      },
      {
        status: 500,
      },
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const result = await prisma.users.create({
      data: {
        email: body.email,
        name: body.fullNam,
        id: crypto.randomUUID(),
        password: crypto.randomUUID(),
      },
    });
    return NextResponse.json(
      result,
      {
        status: 200,
      },
    );
  } catch (e) {
    return NextResponse.json(
      {
        message: e,
      },
      {
        status: 500,
      },
    );
  }
}
