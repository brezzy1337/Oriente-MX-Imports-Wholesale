import bcrypt from 'bcryptjs';
import { prisma } from '../../utils/primsa';

export type UserRole = 'USER' | 'EMPLOYEE' | 'ADMIN';

export async function createUser(email: string, password: string, name: string, role: UserRole = 'USER') {
    const hashedPassword = await bcrypt.hash(password, 10)

    return prisma.user.create({
        data: {
            email,
            password: hashedPassword,
            name
        },
    })
};

export async function findUser(email: string) {
    return prisma.user.findUnique({ where: { email } })
};
        
export async function validatePassword(user: { password: string },
    inputPassword: string) {
    return bcrypt.compare(inputPassword, user.password)
};                               

export async function getUserId(email: string) {
    const user = await prisma.user.findUnique({ where: { email } })
    return user?.id
}

export async function deleteUser(email: string) {
    return prisma.user.delete({
        where: { email }
    });
}
