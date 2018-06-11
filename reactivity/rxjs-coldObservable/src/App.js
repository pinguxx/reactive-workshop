import {interval} from 'rxjs';

const source = interval(2000);

source.subscribe(value => console.log("first observer", value))

setTimeout(_ =>{
    source.subscribe(value => console.log("second observer", value))
}, 5000);

setTimeout(_ =>{
    source.subscribe(value => console.log("third observer", value))
}, 8000)