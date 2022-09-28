class ApiFeatures{
    constructor(query, queryString){
        this.query = query;
        this.queryString = queryString;
    }
    search(){
        const keyword = this.queryString.keyword ? {
            name: {
                $regex: this.queryString.keyword,
                $options: 'i'
            }
        } : {}
        // console.log(keyword);
        this.query = this.query.find({...keyword});
        return this;
    }
    filter(){
        const queryCopy = {...this.queryString};
        // console.log(queryCopy);
        // Removing fields from the query
        const removeFields = ['keyword', 'page', 'limit']
        removeFields.forEach((key) => delete queryCopy[key]);



        //FILTER FOR PRICE, RATING, AND MORE
        let queryStr = JSON.stringify(queryCopy);
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);
        this.query = this.query.find(JSON.parse(queryStr));
        // console.log(queryStr);
        return this;


        
      
    }
    pageination(resultPerPage){
        const currentPage = Number(this.queryString.page) || 1;//if page is not defined, then it will be 1
        const skip = resultPerPage * (currentPage - 1);//skip the number of products in the previous pages  50-5
        this.query = this.query.limit(resultPerPage).skip(skip);
        return this;
    }

}

module.exports= ApiFeatures;