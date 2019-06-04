window.onload = (function () {
    let results = [{ nombre: "PCM-005" , descripcion : "loreimpsum" , tipo: "noticia"}, 
    { nombre: "PCM-006" , descripcion : "loreimpsum" , tipo: "noticia"}, 
    { nombre: "PCM-007" , descripcion : "loreimpsum" , tipo: "noticia"},
    { nombre: "PCM-008" , descripcion : "loreimpsum" , tipo: "ley"},
    { nombre: "PCM-009" , descripcion : "loreimpsum" , tipo: "ley"}, 
    { nombre: "PCM-010" , descripcion : "loreimpsum" , tipo: "ley"},
    { nombre: "KSM-011" , descripcion : "loreimpsum" , tipo: "noticia"},
    { nombre: "KSM-012" , descripcion : "loreimpsum" , tipo: "noticia"},
    { nombre: "KSM-013" , descripcion : "loreimpsum" , tipo: "noticia"},
    { nombre: "KSM-014" , descripcion : "loreimpsum" , tipo: "ley"}, 
    { nombre: "KSM-015" , descripcion : "loreimpsum" , tipo: "ley"}, 
    { nombre: "KSM-016" , descripcion : "loreimpsum" , tipo: "ley"}];
    try {
        
        $("#inputSearch").on('keyup', function () {
            var search = $("#inputSearch").val();
            var arraySearch = Array.from(search);
            $("#noticias").text("");
            $("#leyes").text("");
            $("#todos").text("");
            for (i = 0; i < results.length; i++) {
                var busquedas = "";
                var resultados = "";
                var result = Array.from(results[i].nombre);
                debugger
                for (a = 0; a < arraySearch.length; a++) {
                    busquedas = busquedas + arraySearch[a];
                    resultados = resultados + result[a];
                    debugger
                }

                var busquedasm = busquedas.toUpperCase();
                var resultadosm = resultados.toUpperCase();
                if (busquedasm === resultadosm && busquedasm!="" && results[i].tipo === "noticia") {
                    $("#noticias").append(`<div class="card" style="width: 100%; margin-top:10px;"><div class="card-body" style="margin-top: 10px; width: 100%;"><h1 id="name"class="card-title">${results[i].nombre}</h1><h4 id="descripcion"class="card-title">${results[i].descripcion}</h4><h4 id="name"class="card-title">${results[i].tipo}</h4></div></div>`);
                }
                if (busquedasm === resultadosm && busquedasm!="" && results[i].tipo === "ley") {
                    $("#leyes").append(`<div class="card" style="width: 100%; margin-top:10px;"><div class="card-body" style="margin-top: 10px; width: 100%;"><h1 id="name"class="card-title">${results[i].nombre}</h1><h4 id="descripcion"class="card-title">${results[i].descripcion}</h4><h4 id="name"class="card-title">${results[i].tipo}</h4></div></div>`);
                }
                if (busquedasm === resultadosm && busquedasm!="") {
                    $("#todos").append(`<div class="card" style="width: 100%; margin-top:10px;"><div class="card-body" style="margin-top: 10px; width: 100%;"><h1 id="name"class="card-title">${results[i].nombre}</h1><h4 id="descripcion"class="card-title">${results[i].descripcion}</h4><h4 id="name"class="card-title">${results[i].tipo}</h4></div></div>`);
                }
            }

        }).keyup();
    } catch (e) {
        console.log(e);
    }
});