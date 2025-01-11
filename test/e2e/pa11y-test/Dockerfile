# Use the official Node.js image
FROM node:lts

# Install Chromium and necessary dependencies
RUN apt-get update && apt-get install -y \
    wget curl ca-certificates unzip \
    libx11-xcb1 libglib2.0-0 libnss3 libgdk-pixbuf2.0-0 \
    libatk1.0-0 libcups2 libxss1 libasound2 libx11-dev \
    libnss3-dev libatk-bridge2.0-0 libgtk-3-0 libgbm-dev \
    chromium

# Set Puppeteer to run without the sandbox
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true

# Set the working directory
WORKDIR /app

# Install Node.js dependencies
RUN npm install puppeteer pa11y fs

# Copy the test script
COPY ./pa11yTest.js .

# Run the tests
CMD ["node", "pa11yTest.js"]  