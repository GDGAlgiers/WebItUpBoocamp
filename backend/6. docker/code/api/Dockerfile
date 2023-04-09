FROM python:3.10.9
WORKDIR /api 
COPY . /api/
RUN pip install -r requirements.txt
CMD [ "python" "main.py" ]
EXPOSE 8000