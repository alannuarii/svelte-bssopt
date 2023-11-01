<script>
    import { onMount } from "svelte";
  
    let plotlyContainer;
  
    onMount(() => {
      var data = [
        {
          type: "indicator",
          mode: "gauge+number+delta",
          value: 99,
          title: { text: "Speed", font: { size: 24 } },
          delta: { reference: 100, increasing: { color: "RebeccaPurple" } },
          gauge: {
            axis: { range: [null, 100], tickwidth: 1, tickcolor: "darkblue" },
            bar: { color: "darkblue" },
            bgcolor: "white",
            borderwidth: 2,
            bordercolor: "gray",
            steps: [
              { range: [0, 250], color: "cyan" },
              { range: [250, 400], color: "royalblue" }
            ],
            threshold: {
              line: { color: "red", width: 4 },
              thickness: 0.75,
              value: 100
            }
          }
        }
      ];
  
      var layout = {
        width: 100,
        height: 100,
        margin: { t: 25, r: 25, l: 25, b: 25 },
        paper_bgcolor: "lavender",
        font: { color: "darkblue", family: "Arial" }
      };
  
      Plotly.newPlot(plotlyContainer, data, layout);
    });
  </script>
  
  <div bind:this={plotlyContainer}/>
  