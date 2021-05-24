
const createLinkedNode= (value) =>{
    return{
        value:value,
        next:null,
    
    }
}
const addNode = (node1,node2) =>{
    if (!node1.next)
        return node1.next = node2
    let aux = node1.next
    node1.next = node2
    return node2.next= aux

}

const query =(value,node) =>{

    if(value == node.value){
        return true  
    }
    if(!node.next){
        return false
    }
    else{
        return query(value,node.next)
    }
}


const removeNode = (value,node) =>{

    if(node.value == value){    //remove if first
        node.value = node.next.value
        node.next = node.next.next
        return true
    }
    else if(value == node.next.value){ //remove if in range
        
        if (!node.next.next){
            node.next = null
        }else{
            node.next = node.next.next
        }
        return true  
    }
    if(!node.next){             //remove if last
        delete node.value
        delete node.next
    }
    else{
        return removeNode(value,node.next)
    }
}


let node1 = createLinkedNode(1)
let node2 = createLinkedNode(2)
let node3 = createLinkedNode(3)
let node4 = createLinkedNode(4)

addNode(node1,node2);
addNode(node1,node4);
addNode(node2,node3);

console.log('Linked List', node1);
console.log('Busca 3 ?', query(3,node1));
console.log('Busca 5 ?', query(5,node1));
// console.log('Remove item ?', removeNode(3,node1));  // Uncomment to remove items from the list 
