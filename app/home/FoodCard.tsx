import { Card, CardBody, CardHeader, Image, TableRow } from "@nextui-org/react";
import styles from '../../styles/globals.module.scss';

interface FoodCardProps {
  title: string;
  isEaten?: boolean;
  imageURL?: string;
  rating: null | number;
}
export default function FoodCard({
  title,
  isEaten,
  imageURL,
  rating,
}: FoodCardProps) {
  return (
    <Card isPressable className={styles.FoodCard} style={{ maxWidth: "300px" }}>
      <CardHeader className={styles.CardImage} style={{display: 'flex', justifyContent: 'center'}}>
        <Image
          src={imageURL}
          isBlurred
          isZoomed
          style={{width: "100%", maxWidth: "100%"}}
          height={160}
          alt={title}
        />
      </CardHeader>
      <CardBody>
        <h2>{title}</h2>
        <span><i>{`You have ${isEaten ? "not" : ""} tried this`}</i></span>
        <span>{rating}/10</span>
      </CardBody>
    </Card>
  );
}
