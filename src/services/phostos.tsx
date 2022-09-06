
import {storage} from '../libs/firebase'
import { ref, listAll, getDownloadURL } from 'firebase/storage'

export type   Phospo = {
    name: string;
    url: string;
}

export async function   Phostos () {

    const list : Phospo[] = [];
    const phostoFolder=  ref(storage , 'images');
    const phostoList = await listAll(phostoFolder)

    for(  let i in phostoList.items) {

        const phostoUrl = await getDownloadURL(phostoList.items[i])

     list.push( {
        
          name: phostoList.items[i].name,
          url : phostoUrl
          }
        );

    }

    return list ;


}