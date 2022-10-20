import { Serie } from './serie.js';

import { data } from './data.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
const AverageNumberOfSeasonsElm: HTMLElement = document.getElementById("seasons")!;

renderSeriesInTable(data);

AverageNumberOfSeasonsElm.innerHTML = `${getAverageNumberOfSeasons(data)}`

function renderSeriesInTable(series: Serie[]): void {
    series.forEach(s => {
      let trElement = document.createElement("tr");
      trElement.innerHTML = `<td style="font-weight: bolder;">${s.id}</td>
                             <td style="color: #4895D9;">${s.name}</td>
                             <td>${s.channel}</td>
                             <td>${s.season}</td>`;
       seriesTbody.appendChild(trElement);
    });
  }

  function getAverageNumberOfSeasons(series: Serie[]): number {
    let totalSeasons: number = 0;
    let numberOfSeries: number = 0;
    series.forEach((serie) => {
        totalSeasons = totalSeasons + serie.season;
        numberOfSeries++;
    });
    return totalSeasons/numberOfSeries;
  }