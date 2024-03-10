FROM quay.io/Kinjux/Venocyber-voice-message:beta
RUN git clone https://github.com/Kingjux/Venocyber-voice-message.git /root/Kingjux/
WORKDIR /root/Kingjux/
RUN yarn install --network-concurrency 1
CMD ["npm", "start"]
