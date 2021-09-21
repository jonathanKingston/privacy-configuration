module.exports = {
    "root": {
        "type": "object",
        "properties": {
            "readme": {"type": "string"},
            "features": {"type": "object"},
            "unprotectedTemporary": {
                "type": "array",
                "items": {"type": "object"}
            }
        }
    },
    "feature": {
        "type": "object",
        "properties": {
            "state": {"type": "string"},
            "exceptions": {
                "type": "array",
                "items": {"type": "object"}
            }
        }
    },
    "exception": {
        "type": "object",
        "properties": {
            "domain": {"type": "string"},
            "reason": {"type": "string"}
        }
    }
}