<template>
  <div class="about-page">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          jhjkhjhkjhjkhj
          <!--<div id="map" style="width: 600px; height: 400px"></div>-->
            <yandex-map :coords="[43.248115, 76.942902]"
                        zoom="13"
                        style="width: 100%;height: 400px"
                        >
              <ymap-marker
                marker-id="1"
                :coords="[43.263996, 76.929660]"
                hint-content="Mega Park"
                :balloon="{header: 'Mega Park'}"
                :icon="{color: 'green'}"
              ></ymap-marker>
              <ymap-marker
                marker-id="2"
                :coords="[43.230029, 76.945630]"
                hint-content="Nurly tau"
                :icon="{color: 'blue'}"
              ></ymap-marker>
            <!--Markers-->
            </yandex-map>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
//        settings: {
//          apiKey: '2edd0dd0-41a5-4a06-afee-5394672ba3cd',
//          lang: 'ru_RU',
//          coordorder: 'latlong',
//          version: '2.1'
//        }
      }
    }
  }
</script>
