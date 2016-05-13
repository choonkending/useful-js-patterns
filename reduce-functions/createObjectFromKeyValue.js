const createObjectFromKeyValue = data => data.reduce((acc, {key, value}) => ({...acc, [key]: value }), {});

