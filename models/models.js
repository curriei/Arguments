export let users = [];
export let posts = [];

export class User{
    constructor (name, id, trust_rating){
        this.name = name;
        this.id = id;
        this.trust_rating = trust_rating;
        this.user_posts = [];
    }

    get get_id(){return this.id;}

    get get_posts(){return this.user_posts;}

    create_post(post_id, text){
        posts.push(new Post(text, this.id, post_id, this.trust_rating));
        this.user_posts.push(post_id);
    }
}

export class Post{
    constructor(text, user_id, post_id, credibility=0.5, args=get_arguments(text)){
        this.user = user_id;
        this.text = text;
        this.credibility = credibility;
        this.post_id = post_id;
    }
    get get_id(){return this.post_id;}
}

function get_arguments(text) {
    // Eventually would like to get an entity recognition for arguments to do this.
    // Can then be passed into entity resolution algorithm to determine same arguments.
    return [
        {start:5,end:7},
        {start: 10, end: 20},
        {start: 25,end: 35}
    ];
}