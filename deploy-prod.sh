#!/bin/bash

# Deploy script for production
# This script builds the project and deploys to the main-git-pages branch

set -e  # Exit on any error

echo "🚀 Starting production deployment..."

# Step 1: Build and deploy
echo "📦 Running npm run deploy..."
npm run deploy

# Step 2: Switch to main-git-pages branch
echo "🔄 Switching to main-git-pages branch..."
git checkout main-git-pages

# Step 3: Clean up old assets
echo "🧹 Cleaning up old assets..."
rm -rf assets lovable-uploads images

# Step 4: Copy new build files
echo "📋 Copying new build files..."
cp -R dist/* .

# Step 5: Add and commit changes
echo "💾 Adding and committing changes..."
git add assets
git add index.html
git commit -m "Pushing latest changes"

# Step 6: Push to remote
echo "⬆️ Pushing to remote..."
git push

# Step 7: Switch back to main branch
echo "🔄 Switching back to main branch..."
git checkout main

echo "✅ Deployment completed successfully!"
