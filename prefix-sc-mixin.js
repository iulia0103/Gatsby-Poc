module.exports = function() {
    return {
        code: function(input) {
            const result = input.replace(
                /(-styled-mixin\d:\s+?[\w]+;)/gm,
                "/* dummyContent */"
            );
            return result;
        }
    };
};
