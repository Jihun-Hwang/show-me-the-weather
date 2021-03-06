# show-me-the-weather
React Native application that displays weather data of cities in Korea.
## Team 4
최형택 황지훈 고예준 김소이
## Goal
아래 4가지 추가 기능을 구현한다.


### 1. 날씨에 맞는 배경 그라데이션 추가
 - 배경 그라데이션을 표현하기 위해 expo-linear-gradient 모듈을 설치하고 가져온다.
```
import { LinearGradient } from 'expo-linear-gradient';
```
 - api를 통해 가져온 데이터 중에서 해당 도시의 날씨상태를 간략하게 알려주는 값(this.state.weather[0].main)은 7가지가 가능하며 이 값을 기준으로 배경 그라데이션을 정의한다. 또한 데이터를 제대로 갖고 오지 못했을 경우의 그라데이션도 정의한다.
```
const weatherConditions = {
    "Thunderstorm": {
        gradient: ["#1F1C2C", "#928DAB"]
    },
    "Drizzle": {
        gradient: ["#59C173", "#5D26C1"]
    },
    "Rain": {
        gradient: ["#005AA7", "#FFFDE4"]
    },
    "Snow": {
        gradient: ["#E0EAFC", "#CFDEF3"]
    },
    "Atmosphere": {
        gradient: ["#FC5C7D", "#6A82FB"]
    },
    "Clear": {
        gradient: ["#e1eec3", "#f05053"]
    },
    "Clouds": {
        gradient: ["#4ECDC4", "#556270"]
    },
    "Error": {
        gradient: ["#636363", "#a2ab58"]
    },
}
```


### 2. 도시이름 검색기능 추가
  - 도시이름을 검색하기 위해 react-native-elements 모듈을 설치하고 가져온다.
```
import { Input } from 'react-native-elements';
```
  - 도시이름을 검색할 때 소문자로 검색해도 제대로 반영하기 위해 toLowerCase()를 사용한다.
```
searchCities: cities.filter(city=>city.toLowerCase().indexOf(searchInput)>-1);
검색된 도시는 searchCities로 걸러서 화면에 출력되도록 한다.
```


### 3. 날씨의 상세정보를 보여주는 버튼 추가

```
TouchableOpacity를 이용하여 날씨 세부 정보를 보여주는 버튼을 생성한다.
이 버튼을 클릭하면 , 오늘의 체감 온도, 최저 기온, 최고 기온, 기압, 습도를 알 수 있다.
```


### 4. 대기 상황을 보여주는 지도 추가
API를 통해 리턴되는 다양한 기상도는 PNG형식의 이미지 데이터다.
대기 온도, 습도, 구름양, 지표면 기압, 풍속 정보를 시각화해서 보여주고자 CarouselView를 사용했다.
CarouselView의 한 종류인 SliderBox 컴포넌트는 스와이프 제스쳐를 통해 다양한 지도를 좌우러 넘기며 볼 수 있게 해준다.
SliderBox의 하단에 위치한 점(bullet)이 몇개의 지도 이미지가 있는지 시각적으로 표현해주며 사용자가 몇 번째 지도를 보고 있는지 표시해줘 UX 측면에서 긍정적이다.  

SliderBox 패키지는 `npm i react-native-image-slider-box`를 통해 설치 가능하다.


## Reference
 - 그라데이션 color value : https://uigradients.com/#KyooTah
 - SliderBox(npm) : https://www.npmjs.com/package/react-native-image-slider-box

