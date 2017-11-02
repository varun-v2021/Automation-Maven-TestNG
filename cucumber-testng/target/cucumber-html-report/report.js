$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("basic_calculator.feature");
formatter.feature({
  "line": 2,
  "name": "Basic Arithmetic",
  "description": "",
  "id": "basic-arithmetic",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@foo"
    }
  ]
});
formatter.background({
  "line": 4,
  "name": "A Calculator",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "a calculator I just turned on",
  "keyword": "Given "
});
formatter.match({
  "location": "RpnCalculatorStepdefs.a_calculator_I_just_turned_on()"
});
formatter.result({
  "duration": 106533120,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Addition",
  "description": "",
  "id": "basic-arithmetic;addition",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "comments": [
    {
      "line": 8,
      "value": "# Try to change one of the values below to provoke a failure"
    }
  ],
  "line": 9,
  "name": "I add 4 and 5",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the result is 9",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 6
    },
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "RpnCalculatorStepdefs.adding(int,int)"
});
formatter.result({
  "duration": 1701120,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9",
      "offset": 14
    }
  ],
  "location": "RpnCalculatorStepdefs.the_result_is(double)"
});
formatter.result({
  "duration": 1400747,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "A Calculator",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "a calculator I just turned on",
  "keyword": "Given "
});
formatter.match({
  "location": "RpnCalculatorStepdefs.a_calculator_I_just_turned_on()"
});
formatter.result({
  "duration": 49920,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Another Addition",
  "description": "",
  "id": "basic-arithmetic;another-addition",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "comments": [
    {
      "line": 13,
      "value": "# Try to change one of the values below to provoke a failure"
    }
  ],
  "line": 14,
  "name": "I add 4 and 7",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "the result is 11",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 6
    },
    {
      "val": "7",
      "offset": 12
    }
  ],
  "location": "RpnCalculatorStepdefs.adding(int,int)"
});
formatter.result({
  "duration": 150187,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11",
      "offset": 14
    }
  ],
  "location": "RpnCalculatorStepdefs.the_result_is(double)"
});
formatter.result({
  "duration": 102400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Many additions",
  "description": "",
  "id": "basic-arithmetic;many-additions",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "the previous entries:",
  "rows": [
    {
      "cells": [
        "first",
        "second",
        "operation"
      ],
      "line": 19
    },
    {
      "cells": [
        "1",
        "1",
        "+"
      ],
      "line": 20
    },
    {
      "cells": [
        "2",
        "1",
        "+"
      ],
      "line": 21
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I press +",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I add \u003ca\u003e and \u003cb\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I press +",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "the result is \u003cc\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "Single digits",
  "description": "",
  "id": "basic-arithmetic;many-additions;single-digits",
  "rows": [
    {
      "cells": [
        "a",
        "b",
        "c"
      ],
      "line": 28,
      "id": "basic-arithmetic;many-additions;single-digits;1"
    },
    {
      "cells": [
        "1",
        "2",
        "8"
      ],
      "line": 29,
      "id": "basic-arithmetic;many-additions;single-digits;2"
    },
    {
      "cells": [
        "2",
        "3",
        "10"
      ],
      "line": 30,
      "id": "basic-arithmetic;many-additions;single-digits;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "A Calculator",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "a calculator I just turned on",
  "keyword": "Given "
});
formatter.match({
  "location": "RpnCalculatorStepdefs.a_calculator_I_just_turned_on()"
});
formatter.result({
  "duration": 41387,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Many additions",
  "description": "",
  "id": "basic-arithmetic;many-additions;single-digits;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@foo"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "the previous entries:",
  "rows": [
    {
      "cells": [
        "first",
        "second",
        "operation"
      ],
      "line": 19
    },
    {
      "cells": [
        "1",
        "1",
        "+"
      ],
      "line": 20
    },
    {
      "cells": [
        "2",
        "1",
        "+"
      ],
      "line": 21
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I press +",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I add 1 and 2",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I press +",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "the result is 8",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RpnCalculatorStepdefs.thePreviousEntries(RpnCalculatorStepdefs$Entry\u003e)"
});
formatter.result({
  "duration": 12202240,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "+",
      "offset": 8
    }
  ],
  "location": "RpnCalculatorStepdefs.I_press(String)"
});
formatter.result({
  "duration": 119040,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 6
    },
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "RpnCalculatorStepdefs.adding(int,int)"
});
formatter.result({
  "duration": 203093,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "+",
      "offset": 8
    }
  ],
  "location": "RpnCalculatorStepdefs.I_press(String)"
});
formatter.result({
  "duration": 79360,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 14
    }
  ],
  "location": "RpnCalculatorStepdefs.the_result_is(double)"
});
formatter.result({
  "duration": 103254,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "A Calculator",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "a calculator I just turned on",
  "keyword": "Given "
});
formatter.match({
  "location": "RpnCalculatorStepdefs.a_calculator_I_just_turned_on()"
});
formatter.result({
  "duration": 39253,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Many additions",
  "description": "",
  "id": "basic-arithmetic;many-additions;single-digits;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@foo"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "the previous entries:",
  "rows": [
    {
      "cells": [
        "first",
        "second",
        "operation"
      ],
      "line": 19
    },
    {
      "cells": [
        "1",
        "1",
        "+"
      ],
      "line": 20
    },
    {
      "cells": [
        "2",
        "1",
        "+"
      ],
      "line": 21
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I press +",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I add 2 and 3",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I press +",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "the result is 10",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RpnCalculatorStepdefs.thePreviousEntries(RpnCalculatorStepdefs$Entry\u003e)"
});
formatter.result({
  "duration": 781227,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "+",
      "offset": 8
    }
  ],
  "location": "RpnCalculatorStepdefs.I_press(String)"
});
formatter.result({
  "duration": 63573,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 6
    },
    {
      "val": "3",
      "offset": 12
    }
  ],
  "location": "RpnCalculatorStepdefs.adding(int,int)"
});
formatter.result({
  "duration": 90027,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "+",
      "offset": 8
    }
  ],
  "location": "RpnCalculatorStepdefs.I_press(String)"
});
formatter.result({
  "duration": 110507,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 14
    }
  ],
  "location": "RpnCalculatorStepdefs.the_result_is(double)"
});
formatter.result({
  "duration": 59733,
  "status": "passed"
});
formatter.examples({
  "line": 32,
  "name": "Double digits",
  "description": "",
  "id": "basic-arithmetic;many-additions;double-digits",
  "rows": [
    {
      "cells": [
        "a",
        "b",
        "c"
      ],
      "line": 33,
      "id": "basic-arithmetic;many-additions;double-digits;1"
    },
    {
      "cells": [
        "10",
        "20",
        "35"
      ],
      "line": 34,
      "id": "basic-arithmetic;many-additions;double-digits;2"
    },
    {
      "cells": [
        "20",
        "30",
        "55"
      ],
      "line": 35,
      "id": "basic-arithmetic;many-additions;double-digits;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "A Calculator",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "a calculator I just turned on",
  "keyword": "Given "
});
formatter.match({
  "location": "RpnCalculatorStepdefs.a_calculator_I_just_turned_on()"
});
formatter.result({
  "duration": 31573,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Many additions",
  "description": "",
  "id": "basic-arithmetic;many-additions;double-digits;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@foo"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "the previous entries:",
  "rows": [
    {
      "cells": [
        "first",
        "second",
        "operation"
      ],
      "line": 19
    },
    {
      "cells": [
        "1",
        "1",
        "+"
      ],
      "line": 20
    },
    {
      "cells": [
        "2",
        "1",
        "+"
      ],
      "line": 21
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I press +",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I add 10 and 20",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I press +",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "the result is 35",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RpnCalculatorStepdefs.thePreviousEntries(RpnCalculatorStepdefs$Entry\u003e)"
});
formatter.result({
  "duration": 757333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "+",
      "offset": 8
    }
  ],
  "location": "RpnCalculatorStepdefs.I_press(String)"
});
formatter.result({
  "duration": 71254,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 6
    },
    {
      "val": "20",
      "offset": 13
    }
  ],
  "location": "RpnCalculatorStepdefs.adding(int,int)"
});
formatter.result({
  "duration": 121174,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "+",
      "offset": 8
    }
  ],
  "location": "RpnCalculatorStepdefs.I_press(String)"
});
formatter.result({
  "duration": 54186,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35",
      "offset": 14
    }
  ],
  "location": "RpnCalculatorStepdefs.the_result_is(double)"
});
formatter.result({
  "duration": 90026,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "A Calculator",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "a calculator I just turned on",
  "keyword": "Given "
});
formatter.match({
  "location": "RpnCalculatorStepdefs.a_calculator_I_just_turned_on()"
});
formatter.result({
  "duration": 40107,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Many additions",
  "description": "",
  "id": "basic-arithmetic;many-additions;double-digits;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@foo"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "the previous entries:",
  "rows": [
    {
      "cells": [
        "first",
        "second",
        "operation"
      ],
      "line": 19
    },
    {
      "cells": [
        "1",
        "1",
        "+"
      ],
      "line": 20
    },
    {
      "cells": [
        "2",
        "1",
        "+"
      ],
      "line": 21
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I press +",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I add 20 and 30",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I press +",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "the result is 55",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RpnCalculatorStepdefs.thePreviousEntries(RpnCalculatorStepdefs$Entry\u003e)"
});
formatter.result({
  "duration": 725333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "+",
      "offset": 8
    }
  ],
  "location": "RpnCalculatorStepdefs.I_press(String)"
});
formatter.result({
  "duration": 61440,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 6
    },
    {
      "val": "30",
      "offset": 13
    }
  ],
  "location": "RpnCalculatorStepdefs.adding(int,int)"
});
formatter.result({
  "duration": 231680,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "+",
      "offset": 8
    }
  ],
  "location": "RpnCalculatorStepdefs.I_press(String)"
});
formatter.result({
  "duration": 66560,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "55",
      "offset": 14
    }
  ],
  "location": "RpnCalculatorStepdefs.the_result_is(double)"
});
formatter.result({
  "duration": 126294,
  "status": "passed"
});
});