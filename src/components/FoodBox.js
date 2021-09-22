import { Card, Col, Button } from "antd";



function FoodBox(props) {
    const {name, image, calories, servings} = props.foodList

    return(
        <Col>
            <Card
            title={name}
            style={{ width: 230, height: 300, margin: 10 }}
            >
                <div>  
            <img src={image} alt={name} height={60} />
            <p>Calories: {calories}</p>
            <p>Servings: {servings}</p>
            <p>
                <b>Total Calories: {servings * calories} </b> kcal
            </p>
            <Button onClick = {()=>props.deleteFood(name)} type="primary" > Delete </Button>
            </div>
            
            </Card>
        </Col>
    )}

export default FoodBox;
