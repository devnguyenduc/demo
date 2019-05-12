/// Framework

function get_data(path){
    let xml = new XMLHttpRequest();
    xml.open("GET",path)
    xml.send();
    let result = xml.responseText;
    return result;
}

function convert_json_to_array(str_object){
    let obj_result = JSON.parse(str_object);
    let array_result = obj_result.result;
    return array_result;
}

/// 
function get_str_news(){
    let path = '/get-post/news'
    return get_data(path)
}

function get_array_news(){
    let result = convert_json_to_array(get_str_news());
    return result;
}

function render(element,array_obj){
    element.innerHTML = '';
    var component = ''
    
    array_obj.forEach(element => {
        component += `
        <img class="card-img-top" src="${element.a}" alt="${element}" style="width:100%">
        <div class="card-body">
            <h4 class="card-title">${element.title}</h4>
            <p class="card-text">${element.describes}</p>
            <a href="${element.url}" class="btn btn-primary stretched-link">Xem</a>
        </div>`
    });
    element.innerHTML = component; 
}

function render_top_10_news(){
    render(document.getElementById("id_top_10_news"),get_array_news())
}
render_top_10_news()