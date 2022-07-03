import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  code = '/*\n' +
      '        - Write method findPath\n' +
      '        - Should take two params:\n' +
      '        - object\n' +
      '        - keys separated by dots as string\n' +
      '        - Return value if it exists at that path inside the object, else return undefined\n' +
      '        */\n' +
      '\n' +
      '        var obj = {\n' +
      '        a: {\n' +
      '        b: {\n' +
      '        c: 12,\n' +
      '        j: false\n' +
      '        },\n' +
      '        k: null\n' +
      '        }\n' +
      '        };\n' +
      '\n' +
      '        const findPath = (object, path) =&gt; {\n' +
      '        const splitted = path.split(\'.\');\n' +
      '        let tempkey;\n' +
      '        for (let i=0; i&lt;splitted.length; i++) {\n' +
      '        if(i === 0) {\n' +
      '        tempkey = object[splitted[i]];\n' +
      '        }\n' +
      '        if (tempkey || tempkey === null || tempkey === false) {\n' +
      '        if (i === splitted.length - 1)\n' +
      '        return object[splitted[i]];\n' +
      '        else tempkey = tempkey[splitted[i]]\n' +
      '        }\n' +
      '        }\n' +
      '        };\n' +
      '\n' +
      '\n' +
      '        console.log(findPath(obj, \'a.b.c\')); // 12\n' +
      '        console.log(findPath(obj, \'a.b\')); // {c: 12, j: false}\n' +
      '        console.log(findPath(obj, \'a.b.d\')); // undefined\n' +
      '        console.log(findPath(obj, \'a.c\')); // undefined\n' +
      '        console.log(findPath(obj, \'a.b.c.d\')); // undefined\n' +
      '        console.log(findPath(obj, \'a.b.c.d.e\')); // undefined\n' +
      '        console.log(findPath(obj, \'a.b.j\')); //false\n' +
      '        console.log(findPath(obj, \'a.b.j.k\')); //undefined\n' +
      '        console.log(findPath(obj, \'a.k\')); //null'

  response = {
    "candidateKey": "ABC123",
    "companyName": "TekSystems",
    "metadata": {
      "resumeUrl": "https://drive.google.com",
      "result": "Selected",
      "role": "UI Developer",
      "interviewTimeStamp": "2022-06-15T15:30:00+5:30",
      "sentBy": "10XClub",
      "recording" : "https://drive.google.com",
      "candidateInfo": {
        "name": "",
        "email": "",
        "contact": ""
      }
    },
    "skillRate": {
      "overallrating": 4.5,
      "individualRating": [
        {
          "skill": "Java",
          "rating": 4.5
        },
        {
          "skill": "Spring",
          "rating": 4.5
        }
      ]
    },
    "detailedFeedback": [
      {
        "heading": "Heighlights",
        "value": " 1. good skills",
        "order": 0
      },
      {
        "heading": "Lowlight",
        "value": "1. Not good",
        "order": 1
      },
      {
        "heading": "Focused point",
        "value": "details of focused point",
        "order": 2
      },
      {
        "heading": "Was candidate able to write prod. ready code ?",
        "value": "written for 1st but not for 2nd",
        "order": 2
      }
    ],
    "sourceCode": {
      "language": "Java",
      "code": ""
    }
  }
}
