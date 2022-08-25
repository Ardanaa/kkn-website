import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
 
export default function CardContent(props) {
  return (
    <Card className="w-96">
      <CardHeader color="blue" className="relative h-56">
        <img
          src={props.img}
          alt="img-blur-shadow"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h5" className="mb-2">
          {props.title}
        </Typography>
        <Typography>
          {props.text}
        </Typography>
      </CardBody>
    </Card>
  );
}