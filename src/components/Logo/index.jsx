import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Logo = () => (
    <Svg
        width={32}
        height={46}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <Path
            d="M19.636 9.91v11.251l3.637 1.647V1.678h-3.637M19.636 1.294v9.22M1.638 32.205 1 40.882"
            stroke="#A17EFF"
            strokeWidth={2}
        />
        <Path
            d="M19.879 1.883c-14.222-1.641-32.323 6.727 0 20.51C52.202 36.174 4.04 42.354 1.455 32.782"
            stroke="#A17EFF"
            strokeWidth={2}
        />
        <Path
            d="M19.14 9.564c-14.003-1.623-31.825 6.655 0 20.289C50.968 43.487 3.547 49.601 1 40.133M23.727 4.367c7.905 0 5.06 8.538 0 8.004L31 23.576"
            stroke="#A17EFF"
            strokeWidth={2}
        />
    </Svg>
)

export default Logo