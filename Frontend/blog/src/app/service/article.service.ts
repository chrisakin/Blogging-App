import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Posts} from '../post';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  articlesUrl = 'http://localhost:3000/articles';
  articleUrl = 'http://localhost:3000/articles/';
  article: any;
  httpOptions: any;

  constructor(private http: HttpClient) {
    this.httpOptions = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods' : 'PUT, POST, GET, DELETE, OPTIONS',
    });
   }

   getArticles(): Observable<Posts> {    
     this.article = this.http.get<Posts>(this.articlesUrl);   
      return this.article; 
     }  


     getArticle(id: number) {   
        return this.http.get(this.articleUrl + id); 
       }


   /** POST: add a new article to the database */ 
    PostArticle(article: Posts): Observable<Posts> {     
       return this.http.post<Posts>(this.articlesUrl, 
       { 'title': article.title, 'body': article.body, 
       'tag': article. tag, 'photo': article.photo 
      },
       {  
         headers: this.httpOptions     
       }) 
     }


   deleteArticle(id: number):   
    Observable<{}> {    
      return this.http.delete(this.articleUrl + id, {      
        headers: this.httpOptions   
   }) 
 }


   updateArticle(id: number, article: Posts): Observable<Posts> {    
     return this.http.put<Posts>(this.articleUrl + id,
       { 
         'title': article.title, 'body': article.body, 'tag': article.tag, 'photo': 
   article.photo
   },
   {     
      headers: this.httpOptions   
     })  
  } 
}

  
