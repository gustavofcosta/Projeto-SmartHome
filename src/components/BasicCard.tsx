import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }} className="bg-black">
      <CardContent className="text-white text-center">
        <Typography
          variant="h1"
          component="div"
          className="text-2xl font-bold md:text-4xl"
        >
          Interruptor Inteligênte
        </Typography>
        <Typography variant="body2" className="text-lg w-13 mt-2 md:text-2xl">
          Controle com Toque,
        </Typography>
        <Typography variant="body2" className="text-lg w-13 md:text-2xl">
          Alexa ou Smarphone
        </Typography>
      </CardContent>
      <CardActions className="flex justify-center items-center">
        <Button
          size="small"
          className="hover:bg-sky-100 trasition duration-700 ease-in-out md:text-lg"
        >
          Ler mais
        </Button>
        <Button
          size="small"
          className="hover:bg-sky-100 trasition duration-700 ease-in-out md:text-lg"
        >
          Comprar
        </Button>
      </CardActions>
    </Card>
  );
}
