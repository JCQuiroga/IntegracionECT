'use strict';

function getPersonas() {
    var nom = $("#txtNombre").val();

    $("#resultado").empty();

    var uri = _spPageContextInfo.webAbsoluteUrl + "/_api/lists/getByTitle('Trabajador')/items?$filter=nombre eq '" + nom + "'";

    $.ajax({
        type: "GET",
        url: uri,
        contenType: "application/json",
        headers: {
            "accept": "application/json;odata=verbose"
        },
        success: onGetresults,
        error: onError
    });
}
function getPersonas2() {
    var nom = $("#txtNombre").val();

    $("#resultado").empty();

    var uri = _spPageContextInfo.webAbsoluteUrl + "/_api/lists/getByTitle('Trabajador')/items?$filter=apellidos eq '" + nom + "'";

    $.ajax({
        type: "GET",
        url: uri,
        contenType: "application/json",
        headers: {
            "accept": "application/json;odata=verbose"
        },
        success: onGetresults,
        error: onError
    });
}

function onError() {
    alert(r.status);
}

function onGetresults(xhr) {
    var odata = xhr.d.results;
    var res = "<table>" +
        "<thead>" +
        "<th>Nombre</th>" +
        "<th>Apellidos</th>" +
        "<th>Edad</th>" +
        "<th>Salario</th>" +
        "</thead>";
    $.each(odata, function (i, item) {
        res += "<tr>";
        res += "<td>" + item.nombre + "</td>";
        res += "<td>" + item.apellidos + "</td>";
        res += "<td>" + item.edad + "</td>";
        res += "<td>" + item.salario + "</td>";
        res += "</tr>";
    });
    res += "</table>";
    $("#resultado").html(res);
}

$(document).ready(function () {
    $("#btnOK").click(getPersonas);
    $("#btnOK2").click(getPersonas2);
});