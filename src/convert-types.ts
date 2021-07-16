export type Typing = Record<string, 'boolean' | 'number'>;

export const convertTypes = (data: any, typing: Typing) => {
    const result = data
    Object.keys(typing).forEach((key) => {
        const type = typing[key];
        const value = data[key];
        switch (type) {
            case "boolean":
                switch (value.toLowerCase()) {
                    case "true":
                    case "1":
                        result[key] = true;
                        break;
                    case "false":
                    case "0":
                        result[key] = false;
                        break;
                    default:
                        break;
                }
                break;
            case "number":
                if (typeof value === "string") {
                    result[key] = parseInt(value, 10);
                }
                break;
            default:
                break;
        }
    });
    return result;
}
