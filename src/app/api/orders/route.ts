import { NextResponse } from 'next/server';
import { getAuthSession } from '../../../utils/authOptions';
import prisma from '../../../utils/connectdb';

// FETCH ALL ORDERS
export const GET = async () => {
  const session = await getAuthSession();

  if (session) {
    try {
      if (session.user.isAdmin) {
        const orders = await prisma.order.findMany();
        return new NextResponse(JSON.stringify(orders), {
          status: 200,
        });
      }

      const orders = await prisma.order.findMany({
        where: {
          userEmail: session.user.email!,
        },
      });
      return new NextResponse(JSON.stringify(orders), {
        status: 200,
      });
    } catch (error) {
      console.log(error);
      return new NextResponse(
        JSON.stringify({ message: 'Something went wrong!' }),
        {
          status: 500,
        },
      );
    }
  } else {
    return new NextResponse(
      JSON.stringify({ message: 'You are not authenticated!' }),
      {
        status: 401,
      },
    );
  }
};

export const POST = () => {
  return new NextResponse('Hello', {
    status: 201,
  });
};
