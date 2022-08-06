from django.shortcuts import render
from newsapi import NewsApiClient
  
# Create your views here. 
def index(request):
      
    newsapi = NewsApiClient(api_key ='77615498a7884365b35bddcd9dd2da90')
    top = newsapi.get_top_headlines(sources ='techcrunch')
  
    get = top['articles']
    desc =[]
    news =[]
    img =[]
  
    for i in range(len(get)):
        f = get[i]
        news.append(get['title'])
        desc.append(get['description'])
        img.append(get['urlToImage'])
    value = zip(news, desc, img)
  
    return render(request, 'index.html', context ={"value":value})