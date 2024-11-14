const { createUser } = require('../lib/auth/auth');

async function main() {
  type UserRole = 'USER' | 'EMPLOYEE' | 'ADMIN' | 'CUSTOMER';
  const args = process.argv.slice(2);
  
  if (args.length < 3) {
    console.log('Usage: npm run create-user <email> <password> <name> [role]');
    process.exit(1);
  }

  const [email, password, name, role = 'USER'] = args;

  try {
    const user = await createUser(
      email,
      password,
      name,
      role as UserRole
    );
    console.log('User created successfully:', user);
  } catch (error) {
    console.error('Error creating user:', error);
    process.exit(1);
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
