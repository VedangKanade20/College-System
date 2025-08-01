🪝 Lefthook – Pre-commit Hook for Formatting and Linting
This project uses Lefthook to automatically format and lint code before committing. It ensures consistent code quality across both client/ and server/ directories.

🔧 Setup Instructions
Install dependencies

If you haven't already, install lefthook, prettier, and eslint in both client and server:

# Root

npm install --save-dev lefthook

# Client

cd client
npm install --save-dev prettier eslint

# Server

cd ../server
npm install --save-dev prettier eslint

In the root of the project, a lefthook.yml file is already configured like this:

This configuration ensures:

Prettier formats all relevant files in both client/ and server/

ESLint fixes lint issues on JavaScript/TypeScript files

🧪 Usage
Now when you run:

git commit -m "your message"
Lefthook will:

Run Prettier and ESLint only on staged files

Prevent the commit if any issue fails or can't be auto-fixed
