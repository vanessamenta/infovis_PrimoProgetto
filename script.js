//i sottomarini hanno l'elica, 3 oblò, il periscopio e la torretta
const data = [
    {
                 widthContainer:200,
                 heightContainer:100,
                 sottomarinoLarghezza:100,
                 sottomarinoAltezza:50,
                 oblo:15,
                 torrettaLarghezza:120,
                 torrettaAltezza:50,
                 periscopioLarghezza:30,
                 periscopioAltezza:90,
                 elica:20,
                 color:getRandomColor(),
            },
            {
                 widthContainer:300,
                 heightContainer:150,
                 sottomarinoLarghezza:150,
                 sottomarinoAltezza:80,
                 oblo:20,
                 torrettaLarghezza:150,
                 torrettaAltezza:80,
                 periscopioLarghezza:20,
                 periscopioAltezza:60,
                 elica:21,
                 color:getRandomColor(),
            },
            {
                 widthContainer:230,
                 heightContainer:110,
                 sottomarinoLarghezza:100,
                 sottomarinoAltezza:55,
                 oblo:20,
                 torrettaLarghezza:90,
                 torrettaAltezza:65,
                 periscopioLarghezza:30,
                 periscopioAltezza:60,
                 elica:22,
                 color:getRandomColor(),
            },
            {
                 widthContainer:250,
                 heightContainer:110,
                 sottomarinoLarghezza:110,
                 sottomarinoAltezza:70,
                 oblo:15,
                 torrettaLarghezza:120,
                 torrettaAltezza:90,
                 periscopioLarghezza:30,
                 periscopioAltezza:70,
                 elica:23,
                 color:getRandomColor(),
            },
            {
                 widthContainer:250,
                 heightContainer:120,
                 sottomarinoLarghezza:110,
                 sottomarinoAltezza:60,
                 oblo:15,
                 torrettaLarghezza:95,
                 torrettaAltezza:75,
                 periscopioLarghezza:20,
                 periscopioAltezza:60,
                 elica:25,
                 color:getRandomColor(),
            },
            {
                 widthContainer:210,
                 heightContainer:100,
                 sottomarinoLarghezza:100,
                 sottomarinoAltezza:70,
                 oblo:20,
                 torrettaLarghezza:100,
                 torrettaAltezza:95,
                 periscopioLarghezza:40,
                 periscopioAltezza:160,
                 elica:24,
                 color:getRandomColor(),
            },
            {
                 widthContainer:205,
                 heightContainer:105,
                 sottomarinoLarghezza:100,
                 sottomarinoAltezza:55,
                 oblo:22.5,
                 torrettaLarghezza:90,
                 torrettaAltezza:75,
                 periscopioLarghezza:20,
                 periscopioAltezza:70,
                 elica:26,
                 color:getRandomColor(),
            },
            {
                 widthContainer:160,
                 heightContainer:110,
                 sottomarinoLarghezza:100,
                 sottomarinoAltezza:54,
                 oblo:12,
                 torrettaLarghezza:85,
                 torrettaAltezza:30,
                 periscopioLarghezza:20,
                 periscopioAltezza:60,
                 elica:20,
                 color:getRandomColor(),
            },
            {
                 widthContainer:200,
                 heightContainer:105,
                 sottomarinoLarghezza:105,
                 sottomarinoAltezza:55,
                 oblo:15,
                 torrettaLarghezza:95,
                 torrettaAltezza:50,
                 periscopioLarghezza:28,
                 periscopioAltezza:70,
                 elica:27,
                 color:getRandomColor(),
            },
            {
                widthContainer:350,
                heightContainer:305,
                sottomarinoLarghezza:300,
                sottomarinoAltezza:190,
                oblo:20,
                torrettaLarghezza:250,
                torrettaAltezza:100,
                periscopioLarghezza:50,
                periscopioAltezza:150,
                elica:26,
                color:getRandomColor(),
           },
    ]

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    var width = 2048
    var height = 2000
    var coordinates = []

    for(i=0;i<data.length;i++)
        coordinates[i] = {
            x : Math.random()*(width)+data[i].sottomarinoLarghezza*2,
            y : Math.random()*(height)+data[i].sottomarinoAltezza*2
        }

    var html = d3.select("html").attr("height","500%")
    var body = d3.select("svg").selectAll("g")
    var sottomarinoContainer = body
        .data(data)
        .enter()
        .append("g")
        .attr("transform", function(d,i) {
            return "translate(" + coordinates[i].x + "," + coordinates[i].y + ")"
        })
        .attr("id", function(d,i) {
            return "svg" + i
        })

    /*aggiungo il periscopio*/
    sottomarinoContainer
    .append("rect")
    .attr("id", "Rect_0")
    .attr("x", function(d) {
        return d.sottomarinoLarghezza
    })
    .attr("y", function(d) {
        return -d.sottomarinoAltezza
    })
    .attr("width", function(d) {
        return d.periscopioLarghezza
    })
    .attr("height", function(d) {
        return d.periscopioAltezza
    })
     .attr("stroke", "black")
     .attr("fill", function(d) {
         return d.color
     })
    .attr("stroke-width", 3)

    /*aggiungo l'elica*/
    sottomarinoContainer
    .append("circle")
    .attr("id", "elica_0")
    .attr("cx",function(d) {
        return -d.sottomarinoLarghezza/32
    })
    .attr("cy", function(d) {
        return  d.sottomarinoAltezza
    })
    .attr("r", function(d) {
        return d.elica
    })
    .attr("stroke", "black")
    .attr("fill","#B5B5B5")
    .attr("stroke-width", 2.5)

    /*aggiungo la torretta*/
    sottomarinoContainer
    .append("rect")
    .attr("id", "Rect_1")
    .attr("x", function(d) {
        return d.sottomarinoLarghezza/2
    })
    .attr("y", function(d) {
        return -d.sottomarinoAltezza/2
    })
    .attr("width", function(d) {
        return d.torrettaLarghezza
    })
    .attr("height", function(d) {
        return d.torrettaAltezza
    })
     .attr("stroke", "black")
     .attr("fill", function(d) {
        return d.color
    })
     .attr("stroke-width", 3)

    /*corpo del sottomarino*/
    sottomarinoContainer
    .append("ellipse")
    .attr("cx", function(d) {
        return d.widthContainer/d.oblo + d.sottomarinoLarghezza
    })
    .attr("cy", function(d) {
        return  d.heightContainer/2
    })
    .attr("rx", function(d) {
        return d.sottomarinoLarghezza
    })
    .attr("ry", function(d) {
        return d.sottomarinoAltezza
    })
    .attr("stroke", "black")
    .attr("fill", function(d) {
         return d.color
     })
    .attr("stroke-width", 3)

    /*aggiungo oblò 0*/
    sottomarinoContainer
    .append("circle")
    .attr("id", "Porthole_0")
    .attr("cx",function(d) {
        return d.sottomarinoLarghezza/2
    })
    .attr("cy", function(d) {
        return  d.sottomarinoAltezza
    })
    .attr("r", function(d) {
        return d.oblo
    })
    .attr("stroke", "black")
    .attr("fill","#33FFFC")
    .attr("stroke-width", 2.5)

    /*aggiungo oblò 1*/
    sottomarinoContainer
    .append("circle")
    .attr("id", "Porthole_1")
    .attr("cx", function(d) {
        return (d.sottomarinoLarghezza/2)*2
    })
    .attr("cy", function(d) {
        return  d.sottomarinoAltezza
    })
    .attr("r", function(d) {
        return d.oblo
    })
    .attr("stroke", "black")
    .attr("fill","#33FFFC")
    .attr("stroke-width", 2.5)

    /*aggiungo oblò 2*/
    sottomarinoContainer
    .append("circle")
    .attr("id", "Porthole_2")
    .attr("cx", function(d) {
        return (d.sottomarinoLarghezza/2) + d.sottomarinoLarghezza
    })
    .attr("cy", function(d) {
        return  d.sottomarinoAltezza
    })
    .attr("r", function(d) {
        return d.oblo
    })
    .attr("stroke", "black")
    .attr("fill","#33FFFC")
    .attr("stroke-width", 2.5)


    //click su un elemento: più è grande e più va in profondità il sottomarino
    d3.selectAll("g")
    .on("click", function(d,j){

        rndIndex = Math.floor(Math.random()*data.length)
        console.log(rndIndex);

        // assegnamento dei valori dell'array a delle variabili
        var widthContainer_j = data[j].widthContainer
        var widthContainer_rndIndex = data[rndIndex].widthContainer
        var heightContainer_j = data[j].heightContainer
        var heightContainer_rndIndex = data[rndIndex].heightContainer
        var sottomarinoLarghezza_j = data[j].sottomarinoLarghezza
        var sottomarinoLarghezza_rndIndex = data[rndIndex].sottomarinoLarghezza
        var sottomarinoAltezza_j = data[j].sottomarinoAltezza
        var sottomarinoAltezza_rndIndex = data[rndIndex].sottomarinoAltezza
        var periscopioLarghezza_j = data[j].periscopioLarghezza
        var periscopioLarghezza_rndIndex = data[rndIndex].periscopioLarghezza
        var periscopioAltezza_j = data[j].periscopioAltezza
        var periscopioAltezza_rndIndex = data[rndIndex].periscopioAltezza
        var torrettaLarghezza_j = data[j].torrettaLarghezza
        var torrettaLarghezza_rndIndex = data[rndIndex].torrettaLarghezza
        var torrettaAltezza_j = data[j].torrettaAltezza
        var torrettaAltezza_rndIndex = data[rndIndex].torrettaAltezza
        var oblo_j = data[j].oblo
        var oblo_rndIndex = data[rndIndex].oblo
        var elica_j = data[j].elica
        var elica_rndIndex = data[rndIndex].elica
        var color_j = data[j].color
        var color_rndIndex = data[rndIndex].color


        // aggiornamento dei valori dell'array
        data[j].widthContainer = widthContainer_rndIndex
        data[j].heightContainer = heightContainer_rndIndex
        data[j].periscopioAltezza = periscopioAltezza_rndIndex
        data[j].periscopioLarghezza = periscopioLarghezza_rndIndex
        data[j].sottomarinoLarghezza = sottomarinoLarghezza_rndIndex
        data[j].sottomarinoAltezza = sottomarinoAltezza_rndIndex
        data[j].torrettaAltezza = torrettaAltezza_rndIndex
        data[j].torrettaLarghezza = torrettaLarghezza_rndIndex
        data[j].elica = elica_rndIndex
        data[j].oblo = oblo_rndIndex
        data[j].color = color_rndIndex
        data[rndIndex].widthContainer = widthContainer_j
        data[rndIndex].heightContainer = heightContainer_j
        data[rndIndex].sottomarinoLarghezza = sottomarinoLarghezza_j
        data[rndIndex].sottomarinoAltezza = sottomarinoAltezza_j
        data[rndIndex].periscopioLarghezza = periscopioLarghezza_j
        data[rndIndex].periscopioAltezza = periscopioAltezza_j
        data[rndIndex].torrettaLarghezza = torrettaLarghezza_j
        data[rndIndex].torrettaAltezza = torrettaAltezza_j
        data[rndIndex].elica = elica_j
        data[rndIndex].oblo = oblo_j
        data[rndIndex].color = color_j


        // ellisse per il corpo
        d3.select("#svg" + j)
        .select("ellipse")
        .transition()
        .delay(200)
        .attr("cx", widthContainer_rndIndex/oblo_rndIndex + sottomarinoLarghezza_rndIndex)
        .attr("cy", heightContainer_rndIndex/2)
        .attr("rx", sottomarinoLarghezza_rndIndex)
        .attr("ry", sottomarinoAltezza_rndIndex)
        .style("fill", color_rndIndex)
        .duration(2500)

        d3.select("#svg" + rndIndex)
        .select("ellipse")
        .transition()
        .delay(200)
        .attr("cx", widthContainer_j/oblo_j + sottomarinoLarghezza_j)
        .attr("cy", heightContainer_j/2)
        .attr("rx", sottomarinoLarghezza_j)
        .attr("ry", sottomarinoAltezza_j)
        .style("fill", color_j)
        .duration(2500)

         //cerchio per elica
         d3.select("#svg" + j)
         .select("#elica_0")
         .transition()
         .delay(200)
         .attr("cx", function() {
             return -sottomarinoLarghezza_rndIndex/32
         })
         .attr("cy", sottomarinoAltezza_rndIndex)
         .attr("r", elica_rndIndex)
         .duration(2500)

         d3.select("#svg" + rndIndex)
         .select("#elica_0")
         .transition()
         .delay(200)
         .attr("cx", function() {
             return -sottomarinoLarghezza_j/32
         })
         .attr("cy", sottomarinoAltezza_j)
         .attr("r", elica_j)
         .duration(2500)

        // rettangolo per periscopio
        d3.select("#svg" + j)
        .select("#Rect_0")
        .transition()
        .delay(200)
        .attr("x", sottomarinoLarghezza_rndIndex)
        .attr("y", function() {
            return -sottomarinoAltezza_rndIndex
        })
        .attr("width", periscopioLarghezza_rndIndex)
        .attr("height", periscopioAltezza_rndIndex)
        .style("fill", color_rndIndex)
        .duration(2500)

        d3.select("#svg" + rndIndex)
        .select("#Rect_0")
        .transition()
        .delay(200)
        .attr("x", sottomarinoLarghezza_j)
        .attr("y", function() {
            return -sottomarinoAltezza_j
        })
        .attr("width", periscopioLarghezza_j)
        .attr("height", periscopioAltezza_j)
        .style("fill", color_j)
        .duration(2500)

        // rettangolo per torretta
        d3.select("#svg" + j)
        .select("#Rect_1")
        .transition()
        .delay(200)
        .attr("x", function() {
            return sottomarinoLarghezza_rndIndex/2
        })
        .attr("y", function() {
            return -sottomarinoAltezza_rndIndex/2
        })
        .attr("width", torrettaLarghezza_rndIndex)
        .attr("height", torrettaAltezza_rndIndex)
        .style("fill", color_rndIndex)
        .duration(2500)

        d3.select("#svg" + rndIndex)
        .select("#Rect_1")
        .transition()
        .delay(200)
        .attr("x", function() {
            return sottomarinoLarghezza_j/2
        })
        .attr("y", function() {
            return -sottomarinoAltezza_j/2
        })
        .attr("width", torrettaLarghezza_j)
        .attr("height", torrettaAltezza_j)
        .style("fill", color_j)
        .duration(2500)

        // cerchio per oblò 0
        d3.select("#svg" + j)
        .select("#Porthole_0")
        .transition()
        .delay(200)
        .attr("cx", function() {
            return sottomarinoLarghezza_rndIndex/2
        })
        .attr("cy", sottomarinoAltezza_rndIndex)
        .attr("r", oblo_rndIndex)
        .duration(2500)

        d3.select("#svg" + rndIndex)
        .select("#Porthole_0")
        .transition()
        .delay(200)
        .attr("cx", function() {
            return sottomarinoLarghezza_j/2
        })
        .attr("cy", sottomarinoAltezza_j)
        .attr("r", oblo_j)
        .duration(2500)

        // cerchio per oblò 1
        d3.select("#svg" + j)
        .select("#Porthole_1")
        .transition()
        .delay(200)
        .attr("cx", function() {
            return (sottomarinoLarghezza_rndIndex/2)*2
        })
        .attr("cy", sottomarinoAltezza_rndIndex)
        .attr("r", oblo_rndIndex)
        .duration(2500)

        d3.select("#svg" + rndIndex)
        .select("#Porthole_1")
        .transition()
        .delay(200)
        .attr("cx", function() {
            return (sottomarinoLarghezza_j/2)*2
        })
        .attr("cy", sottomarinoAltezza_j)
        .attr("r", oblo_j)
        .duration(2500)

        // cerchio per oblò 2
        d3.select("#svg" + j)
        .select("#Porthole_2")
        .transition()
        .delay(200)
        .attr("cx", function() {
            return (sottomarinoLarghezza_rndIndex/2) + sottomarinoLarghezza_rndIndex
        })
        .attr("cy", sottomarinoAltezza_rndIndex)
        .attr("r", oblo_rndIndex)
        .duration(2500)

        d3.select("#svg" + rndIndex)
        .select("#Porthole_2")
        .transition()
        .delay(200)
        .attr("cx", function() {
            return (sottomarinoLarghezza_j/2) + sottomarinoLarghezza_j
        })
        .attr("cy", sottomarinoAltezza_j)
        .attr("r", oblo_j)
        .duration(2500)

        //profondità
        var coordY_j = coordinates[j].y
        var coordY_rndIndex = coordinates[rndIndex].y

        coordinates[j].y = coordY_rndIndex
        coordinates[rndIndex].y = coordY_j

        d3.select("#svg" + j)
        .transition()
        .delay(200)
        .attr("transform", function(){
            return "translate(" + coordinates[j].x + "," + coordY_rndIndex + ")"
        })
        .duration(2500)

        d3.select("#svg" + rndIndex)
        .transition()
        .delay(200)
        .attr("transform", function(){
            return "translate(" + coordinates[rndIndex].x + "," + coordY_j + ")"
        })
        .duration(2500)

    })
