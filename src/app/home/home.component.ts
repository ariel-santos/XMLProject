import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
declare var xmlToJSON: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // @ViewChild('InputFile') InputFile: ElementRef;
  constructor() { }

  uploader: FileUploader = new FileUploader({});
  reader: FileReader = new FileReader();
  XMLContent: any;
  XML2HTML: any;

  ngOnInit() {
    this.uploader.onAfterAddingFile = (fileItem: any) => {
      this.reader.readAsText(fileItem._file);
    };

    this.reader.onload = (ev: any) => {
      this.XMLContent = ev.target.result;

      const parser = new DOMParser();
      this.XML2HTML = parser.parseFromString(ev.target.result, 'application/xml');
      console.log('XML: ', this.XML2HTML);
      // getElementsByTagName('article')[i].childNodes[0].nodeValue;

      // this.XML2HTML = ev.target.result;
      // console.log('XML: ', this.XMLContent);

    //   const jsonObj = xmlToJSON.parseString(ev.target.result);
    //   console.log(jsonObj);

        // const xml_serializer = new XMLSerializer();
        // this.XMLContent = xml_serializer.serializeToString(ev.target.result);

    };

  }

}

// XML EXAMPLE

// <?xml version="1.0" encoding="UTF-8"?>
// <!DOCTYPE article PUBLIC "-//NLM//DTD JATS (Z39.96) Journal Publishing DTD v1.1 20151215//EN" "https://jats.nlm.nih.gov/publishing/1.1/JATS-journalpublishing1.dtd">
// <article xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink"
//     article-type="review-article" dtd-version="1.1" specific-use="sps-1.9" xml:lang="en">
//     <journal-meta>
//         <journal-id journal-id-type="nlm-ta">Arq Bras Oftalmol</journal-id>
//         <journal-id journal-id-type="publisher-id">abo</journal-id>
//         <journal-title-group>
//             <journal-title>Arquivos Brasileiros de Oftalmologia</journal-title>
//             <abbrev-journal-title abbrev-type="publisher">Arq. Bras.
//                 Oftalmol.</abbrev-journal-title>
//         </journal-title-group>
//         <issn pub-type="ppub">0004-2749</issn>
//         <issn pub-type="epub">1678-2925</issn>
//         <publisher>
//             <publisher-name>Conselho Brasileiro de Oftalmologia</publisher-name>
//         </publisher>
//     </journal-meta>
// </article>

