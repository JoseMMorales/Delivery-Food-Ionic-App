### Deliver Food UI layout...

[Ion-slide](https://ionicframework.com/docs/api/slides) practice where different images are rendered to be swipped between them. Besides, an implementation of hide/show pieces of the layout are done when user scroll up/down thanks to [ion-scroll](https://ionicframework.com/docs/api/virtual-scroll), and [ViewChild Decorator](https://angular.io/api/core/ViewChild) to access ion components in the DOM([IonList](https://ionicframework.com/docs/api/list), [IonContent](https://ionicframework.com/docs/api/content), [IonSlides](https://ionicframework.com/docs/api/slides)).

#### Home page images

<div align="center">

|
Expanded Header | Collapsed Header |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| <img width="182" alt="1" src="https://user-images.githubusercontent.com/43299285/209463746-1839dc23-31cd-4b44-93d8-5befe4425e48.PNG"> | <img width="182" alt="2" src="https://user-images.githubusercontent.com/43299285/209463757-dc9ba04f-8acf-4786-9fb5-44a4ab95c5bb.PNG"> |

</div>

#### Details page images

<div align="center">

|
Landing Details | Scroll Details |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| <img width="182" alt="3" src="https://user-images.githubusercontent.com/43299285/209464084-d132163c-e20a-45c6-bac1-10b446b6c723.PNG"> | <img width="169" alt="4" src="https://user-images.githubusercontent.com/43299285/209464094-e4f79852-d305-4d7e-b6fc-4c5a8e0fd53d.PNG"> |

</div>

### Create blank App...

`ionic start foodUI blank --type=angular --capacitor`

<br>

`cd ./foodUI`

<br>

`ionic g page details`

<br>

`ionic g module directives/sharedDirectives --flat`
`ionic g directive directives/parallax`
`ionic g directive directives/hideHeader`

### Technology

- @angular/cli: 15.0.0
- @ionic/angular: 6.1.9
- @capacitor/cli: 4.6.1

### Author

JoseMMorales
