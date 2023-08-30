import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "pokemonTypeColor" })
export class PokemonTypeColorPipe implements PipeTransform {
  transform(type: string): string {
    let color: string;

    switch (type) {
      case "Feu":
        color = "#FF5722"; // Red lighten-1
        break;
      case "Eau":
        color = "#2196F3"; // Blue lighten-1
        break;
      case "Plante":
        color = "#4CAF50"; // Green lighten-1
        break;
      case "Insecte":
        color = "#795548"; // Brown lighten-1
        break;
      case "Normal":
        color = "#E0E0E0"; // Grey lighten-3
        break;
      case "Vol":
        color = "#B3E5FC"; // Blue lighten-3
        break;
      case "Poison":
        color = "#7E57C2"; // Deep-purple accent-1
        break;
      case "Fée":
        color = "#FF80AB"; // Pink lighten-4
        break;
      case "Psy":
        color = "#512DA8"; // Deep-purple darken-2
        break;
      case "Electrik":
        color = "#CDDC39"; // Lime accent-1
        break;
      case "Combat":
        color = "#FF5722"; // Deep-orange
        break;
      default:
        color = "#9E9E9E"; // Grey
        break;
    }

    return `border: solid ${color}; background-color: ${color};`;
  }
}
