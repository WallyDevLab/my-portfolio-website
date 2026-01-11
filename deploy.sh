# #!/bin/bash

# # 1. Colors for feedback
# GREEN='\033[0;32m'
# RED='\033[0;31m'
# NC='\033[0m' # No Color

# echo "🔍 Starting pre-deployment checks..."

# # 2. Run the build check we defined in package.json
# if npm run build-check; then
#     echo -e "${GREEN}✅ Build check passed! Proceeding to push...${NC}"
# else
#     echo -e "${RED}❌ Build check failed. Fix the errors above before pushing.${NC}"
#     exit 1
# fi

# # 3. Ask for a commit message
# echo "📝 Enter your commit message:"
# read message

# if [ -z "$message" ]; then
#     message="Update portfolio: $(date +'%Y-%m-%d %H:%M:%S')"
# fi

# # 4. Git Automation
# echo "🚀 Pushing to GitHub..."
# git add .
# git commit -m "$message"
# git push origin main

# echo -e "${GREEN}🎉 Deployment successful! Vercel is now building your changes.${NC}"