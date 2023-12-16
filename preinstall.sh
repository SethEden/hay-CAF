#!/bin/bash

# Define text formatting variables
BOLD='\033[1m'
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Divider 
divider() {
    local pattern="*****"
    local length=$1
    printf "%${length}s\n" | tr ' ' "$pattern"
}

divider 30 
echo -e "\n     ${BLUE}${BOLD}Preinstall Check${NC}     \n"
divider 30

# List of npm modules to check
npm_modules=("testcafe" "testcafe-reporter-html")

# Function to check if npm module is installed
check_module() {
    local module_name="$1"
    if ! npm list -g --depth 0 | grep -E -q "\\b${module_name}\\b"; then
        echo "Warning: $module_name is not installed."
        missing_modules+=("$module_name")
    fi
}

# Array to store missing modules
missing_modules=()

# Check each npm module
for module in "${npm_modules[@]}"; do
    check_module "$module"
done

# If there are missing modules, prompt user for installation
if [ ${#missing_modules[@]} -gt 0 ]; then
    echo -e "${RED}${BOLD}The following npm modules are missing: ${missing_modules[*]}${NC}"
    read -p "Do you want to install all missing modules? (yes/no): " answer

    if [ "$answer" == "yes" ]; then
        npm install -g "${missing_modules[@]}"
        echo -e "\n${GREEN}Preinstallations completed! 🚀${NC}\n"
    else
        echo -e "${RED}${BOLD}Installation aborted. Please install the required modules manually.${NC}\n"
        exit 1
    fi
fi

