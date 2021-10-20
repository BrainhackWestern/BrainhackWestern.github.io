interface BasicDate {
    /**
        * @maximum 31
        * @minimum 0
        */
    day: number;

    /**
    * @maximum 12
    * @minimum 0
    */
    month: number;

    /**
    * @minimum 0
    */
    year: number;
}