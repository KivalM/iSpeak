FROM mcr.microsoft.com/devcontainers/base:ubuntu

RUN apt-get update
RUN apt-get install -y python3-espeak ffmpeg
RUN curl -L https://fly.io/install.sh | sh
RUN export FLYCTL_INSTALL="/home/vscode/.fly"
RUN export PATH="$FLYCTL_INSTALL/bin:$PATH"