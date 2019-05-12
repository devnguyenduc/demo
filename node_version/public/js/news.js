/// Framework

function get_data(path){
    var xml = new XMLHttpRequest();
    xml.open("GET",path,false);
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
    let path = 'http://localhost:3000/post/get-post/lastest'
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
        <img class="card-img-top mt-2" src="${"/images/"+element.id+".jpg"}" alt="${element.title}" style="width:100%"/>
        <div class="card-body">
            <h4 class="card-title"><a href="${"/post/"+element.id}" class="stretched-link">${element.title}</a></h4>
            <p class="card-text">${element.describes}</p>
        </div>`
    });
    element.innerHTML = component; 
}

function render_top_10_news(document){
    render(document,get_array_news())
}
render_top_10_news(document.getElementById("id_top_10_news"));