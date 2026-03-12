import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { log } from 'node:console';

@Component({
  selector: 'app-image-search-engin',
  imports: [FormsModule, CommonModule],
  standalone: true,
  templateUrl: './image-search-engin.html',
  styleUrl: './image-search-engin.css',
})
export class ImageSearchEngin {
  inputText: string = '';
  showImages: any[] = [];
  constructor(private cdr: ChangeDetectorRef) { }
  page: string = "";


  async search() {
    this.page = '1';
    this.showImages = [];
    this.fetchImage();


  }
  async moreImg() {
    console.log("hi");
    let temp = Number(this.page) + 1;
    this.page = temp.toString();
    this.fetchImage();

  }
  private async fetchImage() {
    const url = `https://api.unsplash.com/search/photos?page=${this.page}&query=${this.inputText}&client_id=mTKKMvqyv9qbD4S1ayGvKEIa2GuhBFbZgPgZkRKSGhY&per_page=12`;
    const response = await fetch(url);
    const data = await response.json();

    this.showImages = [...this.showImages, ...data.results.map((res: any) => ({
      img: res.urls.small,
      link: res.links.html
    }))
    ];
    this.cdr.detectChanges();
  }


}
