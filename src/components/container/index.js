import React, {useState, useEffect, useRef} from 'react';
import { debounceTime, map, distinctUntilChanged } from 'rxjs/operators';
import { BASE_URL } from "../../constants/url";
import CardUserInfo from "../user";
import {fromEvent} from "rxjs";

function Container() {
    const [data, setData] = useState({});
    const ref = useRef();

    useEffect(() => {

        const userData = fromEvent(ref.current, "input").pipe(
            map(e => e.target.value),
            debounceTime(1000),
            distinctUntilChanged(),
        ).subscribe(val => fetch(`${BASE_URL}${val}`).then(res => res.json()).then(data => setData(data)).catch(error => console.log(error)))

        return () => {
            userData.unsubscribe();
        }
    }, []);

    return (
        <div className="container">
            <input
                type='text'
                ref={ref}
                placeholder='search...'
            />
            <CardUserInfo
                data={data}
            />
        </div>
    );
};

export default Container;
