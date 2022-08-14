import React,{Component} from 'react';
import {ARTIKELEN} from '../mock-artikelen.ts'

export default class ArtikelService{
   
    baseURL= "https://jsonplaceholder.typicode.com/posts"


    async getArtikelen(){
        //return (await fetch(this.baseURL)).json();
        return await ARTIKELEN;
    }


}

export const artikelService = new ArtikelService();
