import { deleteUser } from '../lib/auth/auth';

async function main() {
    const args = process.argv.slice(2);
    
    if (args.length < 1) {
        console.log('Usage: npm run delete-user <email>');
        process.exit(1);
    }

    const [email] = args;

    try {
        const user = await deleteUser(email);
        console.log('User deleted successfully:', user);
    } catch (error) {
        console.error('Error deleting user:', error);
        process.exit(1);
    }
}

main()
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
