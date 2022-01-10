// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
	export interface ThemeStructure {
		color01: string;
		color02: string;
		color03: string;
		color04: string;
		color05: string;
		color06: string;
		font01: string;
		font02: string;
	}
}