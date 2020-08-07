# show-me-the-weather
React Native application that displays weather data of cities in Korea.

### Team4
최형택 황지훈 고예준 김소이

### Goal
아래 4가지 추가 기능을 구현한다.

### 1. 날씨에 맞는 배경 그라데이션 추가
 - 배경 그라데이션을 표한하기 위해 expo-linear-gradient 모듈을 설치하고 가져온다.
```
import { LinearGradient } from 'expo-linear-gradient';
```
 - api를 통해 가져온 데이터 중에서 해당 도시의 날씨상태를 간략하게 알려주는 값을 기준으로 배경 그라데이션을 정의하기 위해 변수에 저장한다.
```
const briefWeatherInfo = this.state.weather[0].main;
```
 - this.state.weather[0].main에 가능한 날씨 정보는 총 7가지이며, 데이터를 제대로 갖고 오지 못했을 경우의 그라데이션도 정의한다.
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
 - 가져온 날씨 정보를 weatherConditions컴포넌트에 매칭시켜 해당하는 gradient값을 LinearGradient의 color로 사용한다.
```
<LinearGradient colors={weatherConditions[briefWeatherInfo].gradient} style={styles.container}>
```
 - 마지막으로, 데이터를 정상적으로 갖고오지 못하였을 경우에는 catch문을 통해 따로 return한다. 이때는 weatherConditions의 값으로 직접 정의한 "Error"로 설정한다.
```
<LinearGradient colors={weatherConditions["Error"].gradient} style={styles.container}>
```

### 2. 도시이름 검색기능 추가

### 3. 날씨의 상세정보를 보여주는 버튼 추가

### 4. 대기 상황을 보여주는 지도 추가


### Reference
 - 그라데이션 color value : https://uigradients.com/#KyooTah


