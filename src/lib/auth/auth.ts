import { compare, hash } from 'bcryptjs';
import { prisma } from '../../utils/primsa';

export async function createUser( email: string, password: string, name: string) {
    const hashedPassword = await hash(password, 12)

    return prisma.user.create({
        data: {
            email,
            password: hashedPassword,
            name,
        },
    })
};

export async function findUser(email: string) {
    return prisma.user.findUnique({ where: { email } })
};
        
export async function validatePassword(user: { password: string },
    inputPassword: string) {
    return compare(inputPassword, user.password)
};                               

export async function getUserId(email: string) {
    const user = await prisma.user.findUnique({ where: { email } })
    return user?.id
}