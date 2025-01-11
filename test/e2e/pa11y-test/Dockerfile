# Use the official Node.js image
FROM node:lts

# Install necessary system dependencies for Puppeteer
RUN apt-get update && apt-get install -y \
    wget curl ca-certificates unzip \
    libx11-xcb1 libglib2.0-0 libnss3 libgdk-pixbuf2.0-0 \
    libatk1.0-0 libcups2 libxss1 libasound2-dev \
    libx11-dev libatk-bridge2.0-0 libgtk-3-0 libgbm-dev \
    --no-install-recommends && \
    rm -rf /var/lib/apt/lists/*

# Set the working directory
WORKDIR /app

# Install Node.js dependencies
RUN npm install puppeteer pa11y fs

# Copy the test script
COPY ./pa11yTest.js .

# Run the tests
CMD ["node", "pa11yTest.js"]  